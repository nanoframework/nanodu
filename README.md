[![GitHub Actions status](https://github.com/nanoframework/nanodu/actions/workflows/check-dist.yml/badge.svg)](https://github.com/nanoframework/nanodu) [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![#yourfirstpr](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](https://github.com/nanoframework/Home/blob/main/CONTRIBUTING.md) [![Discord](https://img.shields.io/discord/478725473862549535.svg?logo=discord&logoColor=white&label=Discord&color=7289DA)](https://discord.gg/gCyBu8T)

![nanoFramework logo](https://raw.githubusercontent.com/nanoframework/Home/main/resources/logo/nanoFramework-repo-logo.png)

-----

## GitHub Action for .NET **nanoFramework** dependencies updater

This action installs the nanodu dotnet tool and udpates the NuGet packages and respective nuspec files in any .NET nanoFramework solutions living in a GitHub repository.

### Inputs
|Name               |Default                            |Options                        |Description
|--                 |--                                 |--                             |--|
`workingDirectory`  |_root_ Repository workspace path   | _optional_ folder path        |Use when targeting Solution file(s) other than in the repository root folder.
`branchToPr`        |_main_                             |branch                         |Name of branch to which submit the PR with the updates. 
`stablePackages`    |`true`                             |`true`/`false`                 |Use _true_ for `stable` NuGet package versions.
`previewPackages`   |`false`                            |`true`/`false`                 |Use _true_ for `preview` NuGet package versions.
`solutionsToCheck`  |All                                |_optional_ string path(s)      |List of Solution(s) to update in the current `workingDirectory`.
`reposToUpdate`     |None                               |_optional_ repository names    |List of (dependent upstream) repository(es) to update. [internal use only].
`exclusionList`     |None                               |_optional_ solution list       |List of solution(s) to exclude from update. Comma separated list.
`gitHubUser`        |                                   |                               |Git hub user for creating PR.
`gitHubEmail`       |                                   |                               |Git hub user email for creating PR.
`gitHubAuth`        |                                   |                               |GitHub Personal Access Token for creating PR.
`nugetConfig`       |                                   |                               |Path to nuget.config file to use for NuGet operations.
`repoOwner`         |                                   |                               |Repository owner on git hub. github.com/**[repoOwner]**/repositoryName
`useTokenForClone`  |                                   |                               |Should use token for cloning repositories. Required when working with private repositories.

## Example usage

Update dependencies of library in repository where this action is being executed using preview NuGet packages.

```yaml
- uses: nanoframework/nanodu@v1
  env:
    GITHUB_TOKEN: ${{ github.token }}
  with:
    previewPackages: true
```

Update dependencies of `amqp-nanoFramework.sln` solution using stable NuGet packages.

```yaml
- uses: nanoframework/nanodu@v1
  env:
    GITHUB_TOKEN: ${{ github.token }}
  with:
    stablePackages: true
    solutionsToCheck: 'amqp-nanoFramework.sln'
```

Update dependencies on several repositories using stable NuGet packages and a NuGet.config file.

```yaml
- uses: nanoframework/nanodu@v1
  env:
    GITHUB_TOKEN: ${{ github.token }}
  with:
    stablePackages: true
    nugetConfig: 'C:\repos\NuGet.config'
    reposToUpdate: >
      System.Net.Http
      System.Net.WebSockets
      System.Device.WiFi
      nanoFramework.m2mqtt
      nanoFramework.Azure.Devices
```

Update dependencies on all solutions, except `MyLibrary` and `MyOtherLibrary`, using preview NuGet packages.

```yaml
- uses: nanoframework/nanodu@v1
  env:
    GITHUB_TOKEN: ${{ github.token }}
  with:
    previewPackages: true
    solutionsToCheck: 'amqp-nanoFramework.sln'
    exclusionList: 'MyLibrary,MyOtherLibrary'
```

## Authentication

In order to run properly this action requires authentication. There are two ways to accomplish this:

1. Setting up the GitHub token as an environment variable. There are numerous ways of doing this.
On the examples above it's being set on the action itself. If that's done elsewhere before the action runs, there is no need to do it again.
1. Passing a Personal Access Token in the `gitHubAuth` parameter. This is required if there are GitHub actions or workflows that run as consequence of that PR being created. This is because of a GitHub security feature that prevents recurring runs when using the repository default token. For more details please read the documentation [here](https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#triggering-a-workflow-from-a-workflow).

## Feedback and documentation

For documentation, providing feedback, issues and finding out how to contribute please refer to the [Home repo](https://github.com/nanoframework/Home).

Join our Discord community [here](https://discord.gg/gCyBu8T).

## Credits

The list of contributors to this project can be found at [CONTRIBUTORS](https://github.com/nanoframework/Home/blob/main/CONTRIBUTORS.md).

## License

The **nanoFramework** Class Libraries are licensed under the [MIT license](LICENSE.md).

## Code of Conduct

This project has adopted the code of conduct defined by the Contributor Covenant to clarify expected behaviour in our community.
For more information see the [.NET Foundation Code of Conduct](https://dotnetfoundation.org/code-of-conduct).

### .NET Foundation

This project is supported by the [.NET Foundation](https://dotnetfoundation.org).
