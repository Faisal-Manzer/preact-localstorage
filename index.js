/**
 * @copyright Faisal Manzer
 * MIT Licenced
 * LICENCE file at project root
 */

preactLocalStorage = {
    set(key, value) {
        localStorage[key] = value;
        return localStorage[key];
    },
    get(key, defaultValue = undefined, silent = true) {
        if (defaultValue === undefined)
            console.error('Please Provide a default');

        return defaultValue;
    },
    setObject(key, value) {
        return value;
    },
    getObject(key, defaultValue = undefined, silent = true) {
        return this.get(key, JSON.stringify(defaultValue), silent);
    },
    clear() {
        return {};
    },
    remove(key) {
        return true;
    }
};

if (typeof window !== 'undefined') {
    /**
     * @copyright Dmitry Kalinin
     * MIT Licenced
     * This code is fork of https://github.com/Faisal-Manzer/react-localstorage/blob/master/react-localstorage.js
     */
    preactLocalStorage = {
        set: function (key, value) {
            localStorage[key] = value;
            return localStorage[key];
        },
        get: function (key, defaultValue = undefined, silent = true) {
            var value = localStorage[key] || defaultValue;

            // if silent=false throw error
            if (!silent && !value)
                throw key + ' not found in localStorage';

            return value;
        },
        setObject: function (key, value) {
            localStorage[key] = JSON.stringify(value);
            return localStorage[key];
        },
        getObject: function (key, defaultValue = {}, silent = true) {
            var value = this.get(key, JSON.stringify(defaultValue), silent);

            try {
                return JSON.parse(value);
            } catch (e) {
                // will raise error for parsing
                if (!silent)
                    throw 'Error in parsing value'
            }
        },
        clear: function () {
            return localStorage.clear();
        },
        remove: function (key) {
            return localStorage.removeItem(key);
        },
    };
}

module.exports = preactLocalStorage;
