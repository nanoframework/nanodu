import * as core from '@actions/core';

export class Inputs {
    static get workingDirectory(): string | undefined {
        const result = core.getInput('workingDirectory');
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
}
