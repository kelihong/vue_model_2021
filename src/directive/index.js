import test from './components/test'

let directives = {
    test: test
    }

export default {
    install(Vue) {
        Object.keys(directives).forEach(key => {
            Vue.directive(key,directives[key])
        })  
    }
}
