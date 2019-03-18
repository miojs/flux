class Ioc {
    constructor() {
        this.setIocDefaults();
    }   

    setIocDefaults() {
        this.bindings = {};
        this.classAliases = {};
        this.classAutoloaders = {};
        this.callExtensions = [];
    }

    getAutoloadedNamespace(namespace) {
        //
    }

    hasRegisteredBinding(namespace) {
        //
    }

    hasRegisteredAlias(namespace) {
        //
    }

    hasAutoloadedDirectory(namespace) {
        //
    }

    resolveBinding(namespace) {
        //
    }

    bindings() {
        //
    }

    alisases() {
        //
    }

    autoloads() {
        //
    }

    registerAlias(namespace, alias) {
        //
    }

    alias(namespace, alias) {
        this.registerAlias(namespace, alias);
    }

    autoloadDirectory(directory, namespace) {
        //
    }

    bindNamespace(namespace, closure) {
        //
    }

    bind(namespace, closure) {
        this.bindNamespace(namespace, closure);
    }

    bindSingleton(namespace, closure) {
        //
    }

    singleton(namespace, closure) {
        this.bindSingleton(namespace, closure);
    }

    extend(...args) {
        //
    }

    executeCallExtensions() {
        //
    }

    use(namespace) {
        //
    }

    with(namespace) {
        //
    }

    make(namespace) {
        //
    }

    getNamespacePath(namespace) {
        //
    }
}