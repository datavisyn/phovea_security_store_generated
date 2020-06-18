//register all extensions in the registry following the given pattern
export default function (registry) {
    //registry.push('extension-type', 'extension-id', function() { return import('./src/extension_impl'); }, {});
    // generator-phovea:begin
    registry.push('securityCustomizedLoginForm', 'generated', function () { return import('.'); }, {
        template: import('./templates/_loginForm.html')
    });
    // generator-phovea:end
}
//# sourceMappingURL=phovea.js.map