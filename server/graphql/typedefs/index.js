const path = require('path');
const fs = require('fs');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const typeDefDir = path.join(__dirname);
const typeDefsArray = [];

fs.readdirSync(typeDefDir).forEach((file) => {
    if (file.endsWith('graphql')) {
        const typeDefPath = path.join(typeDefDir, file)
        const typeDefs = fs.readFileSync(typeDefPath, 'utf-8')
        typeDefsArray.push(typeDefs)
    }
});

const typeDefs = mergeTypeDefs(typeDefsArray);

module.exports = { typeDefs };