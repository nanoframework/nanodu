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

    if (Inputs.branchToPr) {
      args.push('--branch-to-pr', Inputs.branchToPr);
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

    if (Inputs.exclusionList) {
      args.push('--exclusion-list', Inputs.exclusionList);
    }

    if (Inputs.gitHubUser) {
      args.push('--git-hub-user', Inputs.gitHubUser);
    }

    if (Inputs.gitHubEmail) {
      args.push('--git-hub-email', Inputs.gitHubEmail);
    }

    if (Inputs.repoOwner) {
      args.push('--repo-owner', Inputs.repoOwner);
    }

    if (Inputs.gitHubAuth) {
      args.push('--git-hub-auth', Inputs.gitHubAuth);
    }

    if (Inputs.nugetConfig) {
      args.push('--nugetConfig', Inputs.nugetConfig);
    }

    if (Inputs.useTokenForClone) {
      args.push('--use-token-for-clone', Inputs.useTokenForClone);
    }

    await exec('nanodu', args);

  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
