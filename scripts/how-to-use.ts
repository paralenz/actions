export const howToUse = (name: string, version: string): string => {
  return `
    ## Usage:
    \`\`\`yaml
    - uses: paralenz/actions/${name}@master
    
    # or lock to a specific version
    - uses: paralenz/actions/${name}@v${version}
    \`\`\``
}
