import * as core from '@actions/core';

export class Inputs {
    static get workingDirectory(): string | undefined {
        const result = core.getInput('workingDirectory');
        return result === '' || result === null ? undefined : result;
    }

    static get stablePackages(): boolean {
        const result = core.getInput('stablePackages');

        if(result == null || result == undefined)
        {
            // default to false
            return false;
        }
        else
        {
            return core.getInput('previewPackages') === 'true';
        }
    }

    static get previewPackages(): boolean {
        const result = core.getInput('previewPackages');

        if(result == null || result == undefined)
        {
            // default to true
            return true;
        }
        else
        {
            return core.getInput('previewPackages') === 'true';
        }
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
