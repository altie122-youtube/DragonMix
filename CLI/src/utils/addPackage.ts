import { execSync } from 'child_process';
import { getUserPkgManager } from './getUserPkgManager';
import ora from 'ora'; // Import ora

// Function to add a package using the appropriate package manager or Astro CLI
export const addPackage = (packageName: string): void => {
    const spinner = ora(`Installing ${packageName}`).start(); // Start spinner
    try {
        if (packageName.startsWith('@astrojs/')) {
            // If the package name starts with '@astrojs/', install via Astro CLI
            execSync(`npx astro add ${packageName.substring('@astrojs/'.length)} -y`);
            spinner.succeed(`Package '${packageName}' added successfully using Astro CLI.`);
            return;
        }

        // If the package name does not start with '@astrojs/', determine the package manager
        const packageManager: string = getUserPkgManager();

        // Execute command based on the detected package manager
        switch (packageManager) {
            case 'npm':
                execSync(`npm install ${packageName} --save`);
                break;
            case 'pnpm':
                execSync(`pnpm add ${packageName}`);
                break;
            case 'yarn':
                execSync(`yarn add ${packageName}`);
                break;
            default:
                throw new Error(`Unsupported package manager: ${packageManager}`);
        }
        
        spinner.succeed(`Package '${packageName}' added successfully using ${packageManager}.`);
    } catch (error) {
        console.error('Error adding package:', error);
        spinner.fail(`Error adding package: ${error.message}`); // Fail spinner on error
    }
};
