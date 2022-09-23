import * as core from '@actions/core';

export class Inputs {
    static get workingDirectory(): string | undefined {
        const result = core.getInput('workingDirectory');
        return result === '' || result === null ? undefined : result;
    }

    static get branchToPr(): string | undefined {
        const result = core.getInput('branchToPr');
        return result === '' || result === null ? undefined : result;
    }

    static get stablePackages(): boolean {
        return core.getInput('stablePackages') === 'true';
    }

    static get previewPackages(): boolean {
        return core.getInput('previewPackages') === 'true';
    }

    static get solutionsToCheck(): string | undefined {
        const result = core.getInput('solutionsToCheck');
        return result === '' || result === null ? undefined : result;
    }

    static get reposToUpdate(): string | undefined {
        const result = core.getInput('reposToUpdate');
        return result === '' || result === null ? undefined : result;
    }

    static get exclusionList(): string | undefined {
        const result = core.getInput('exclusionList');
        return result === '' || result === null ? undefined : result;
    }

    static get gitHubUser(): string | undefined {
        const result = core.getInput('gitHubUser');
        return result === '' || result === null ? undefined : result;
    }

    static get gitHubEmail(): string | undefined {
        const result = core.getInput('gitHubEmail');
        return result === '' || result === null ? undefined : result;
    }

    static get repoOwner(): string | undefined {
        const result = core.getInput('repoOwner');
        return result === '' || result === null ? undefined : result;
    }

    static get gitHubAuth(): string | undefined {
        const result = core.getInput('gitHubAuth');
        return result === '' || result === null ? undefined : result;
    }
}
