import * as core from '@actions/core';

export class Inputs {
    static get workingDirectory(): string | undefined {
        const result = core.getInput('workingDirectory');
        return result === '' || result === null ? undefined : result;
    }

    static get stablePackages(): boolean | undefined {
        return core.getInput('previewPackages') === 'true';
    }

    static get previewPackages(): boolean | undefined {
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

}
