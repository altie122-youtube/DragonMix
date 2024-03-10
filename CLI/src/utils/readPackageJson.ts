import * as fs from 'fs';

// Function to read the package.json file
export const readPackageJson = (): string => {
    try {
        // Read the package.json file
        const packageJsonData: Buffer = fs.readFileSync('package.json');
        
        // Parse the JSON data
        const packageJson: any = JSON.parse(packageJsonData.toString());
        
        // Display the package.json content
        return(packageJson)
    } catch (error) {
        console.error('Error reading package.json file:', error);
        return("ERROR")
    }
};