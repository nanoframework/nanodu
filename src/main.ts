import * as core from '@actions/core'
import { exec } from '@actions/exec'
import * as os from 'os'
import * as path from 'path'
import { Inputs } from './settings';

async function run() {
  try {

    // skip first experience prompt
    process.env["DOTNET_NOLOGO"] = 'true';

    // install nanodu
    let installArgs = ['tool', 'install', '-g', 'nanodu', '--add-source', 'https://pkgs.dev.azure.com/nanoframework/feed/_packaging/sandbox/nuget/v3/index.json'];

    let exitCode = await exec('dotnet', installArgs, { ignoreReturnCode: true });
    if (exitCode > 1) {
      throw new Error("failed to install nanodu.");
    }

    // add .dotnet/tools to the path
    core.addPath(path.join(os.homedir(), '.dotnet', 'tools'));

    // build arguments list
    let args = new Array<string>();

    if (Inputs.workingDirectory) {
      args.push('--working-directory', Inputs.workingDirectory);
    }

    if (Inputs.stablePackages) {
      args.push('--stable-packages');
    }

    if (Inputs.previewPackages) {
      args.push('--preview-packages');
    }

    if (Inputs.solutionsToCheck) {
      args.push('--solutions-to-check', Inputs.solutionsToCheck);
    }

    if (Inputs.reposToUpdate) {
      args.push('--repos-to-update', Inputs.reposToUpdate);
    }

    await exec('nanodu', args);

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
