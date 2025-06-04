// Test script for fabric-layers

console.log('NOTICE: fabric-layers is designed primarily for browser environments');
console.log('For proper testing, please use the browser-based test (test-v2.html)');
console.log('Simply open test-v2.html in your browser to run the test');
console.log('\nAttempting to check package version information...');

// Import package.json to check version information
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

try {
  // Get version information from package.json files
  const fabricLayersPkg = require('fabric-layers/package.json');
  const fabricPkg = require('fabric-pure-browser/package.json');
  
  console.log('\nPackage versions:');
  console.log('- fabric-layers:', fabricLayersPkg.version);
  console.log('- fabric-pure-browser:', fabricPkg.version);
  
  console.log('\nIMPORTANT: The library cannot be fully tested in Node.js environment');
  console.log('because it requires browser-specific APIs (window, document, etc.)');
  console.log('Please use the browser-based test for complete testing.');
} catch (error) {
  console.error('Error checking package versions:', error);
}

// No need to run actual library imports in Node.js
// This would fail due to browser dependencies
console.log('\nTo start the browser test, run:');
console.log('npm run test:browser');
console.log('Or simply open test-v2.html in your browser');
