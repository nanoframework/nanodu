[![GitHub Actions status](https://github.com/nanoframework/nanodu/actions/workflows/check-dist.yml/badge.svg)](https://github.com/nanoframework/nanodu) [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE) [![#yourfirstpr](https://img.shields.io/badge/first--timers--only-friendly-blue.svg)](https://github.com/nanoframework/Home/blob/main/CONTRIBUTING.md) [![Discord](https://img.shields.io/discord/478725473862549535.svg?logo=discord&logoColor=white&label=Discord&color=7289DA)](https://discord.gg/gCyBu8T)

![nanoFramework logo](https://raw.githubusercontent.com/nanoframework/Home/main/resources/logo/nanoFramework-repo-logo.png)

-----

## GitHub Action for .NET **nanoFramework** dependencies updater

This action installs the nanodu dotnet tool and udpates the NuGet packages and respective nuspec files in any .NET nanoFramework solutions living in a GitHub repository.

### Inputs

|Name|Default|Description
|--|--|--|
`workingDirectory`|Repository workspace|Working directory. Use when targeting Solution file(s) other than the repository root.
`branchToPr`|Name of branch to which submit the PR with the updates. Default is _main_.
`stablePackages`|true|Use stable NuGet package versions.
`previewPackages`|false|Use preview NuGet package versions.
`solutionsToCheck`||List of Solution(s) to update in the `workingDirectory` directory.
`reposToUpdate`||List of repository(es) to update.
`exclusionList`||List of solution(s) to exclude from update. Comma separated list.

## Example usage

Update dependencies of library in repository where this action is being executed using preview NuGet packages.

```yaml
- uses: nanoframework/nanodu@v1
  with:
    previewPackages: true
```

Update dependencies of `amqp-nanoFramework.sln` solution using stable NuGet packages.

```yaml
- uses: nanoframework/nanodu@v1
  with:
    stablePackages: true
    solutionsToCheck: 'amqp-nanoFramework.sln'
```

Update dependencies on several repositories using stable NuGet packages.

```yaml
- uses: nanoframework/nanodu@v1
  with:
    stablePackages: true
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
  with:
    previewPackages: true
    solutionsToCheck: 'amqp-nanoFramework.sln'
    exclusionList: 'MyLibrary,MyOtherLibrary'
```

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
