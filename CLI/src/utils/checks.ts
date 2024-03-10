import { readPackageJson } from './readPackageJson';

// Function to check if tailwindcss is listed in dependencies or devDependencies
export const checkTailwind = (): string => {
    try {
        // get JSON file
        const packageJson: any = readPackageJson()
        
        // Check if tailwindcss is listed in dependencies or devDependencies
        if (packageJson.dependencies && packageJson.dependencies['tailwindcss']) {
            return 'TRUE';
        } else if (packageJson.devDependencies && packageJson.devDependencies['tailwindcss']) {
            return 'TRUE';
        } else {
            return 'FALSE';
        }
    } catch (error) {
        console.error('Error reading package.json file:', error);
        return 'ERROR';
    }
};

// Function to check if Astro's tailwindcss is listed in dependencies or devDependencies
export const checkAstroTailwind = (): string => {
  try {
      // get JSON file
      const packageJson: any = readPackageJson()
      
      // Check if tailwindcss is listed in dependencies or devDependencies
      if (packageJson.dependencies && packageJson.dependencies['@astrojs/tailwind']) {
          return 'TRUE';
      } else if (packageJson.devDependencies && packageJson.devDependencies['@astrojs/tailwind']) {
          return 'TRUE';
      } else {
          return 'FALSE';
      }
  } catch (error) {
      console.error('Error reading package.json file:', error);
      return 'ERROR';
  }
};

// Function to check if astro is listed in dependencies or devDependencies
const checkAstro = (): string => {
    try {
        // get JSON file
        const packageJson: any = readPackageJson()
        
        // Check if tailwindcss is listed in dependencies or devDependencies
        if (packageJson.dependencies && packageJson.dependencies['astro']) {
            return 'TRUE';
        } else if (packageJson.devDependencies && packageJson.devDependencies['astro']) {
            return 'TRUE';
        } else {
            return 'FALSE';
        }
    } catch (error) {
        console.error('Error reading package.json file:', error);
        return 'ERROR';
    }
  };

//   // Function to check if astro is listed in dependencies or devDependencies
// export const checkRemix = (): string => {
//     try {
//         // get JSON file
//         const packageJson: any = readPackageJson()
        
//         // Check if tailwindcss is listed in dependencies or devDependencies
//         if (packageJson.dependencies && packageJson.dependencies['astro']) {
//             return 'TRUE';
//         } else if (packageJson.devDependencies && packageJson.devDependencies['astro']) {
//             return 'TRUE';
//         } else {
//             return 'FALSE';
//         }
//     } catch (error) {
//         console.error('Error reading package.json file:', error);
//         return 'ERROR';
//     }
//   };

export const checkFramework = (): string => {
    if (checkAstro() == "TRUE"){
        return("ASTRO")
    } else{
        return("UNKOWN")
    }
};