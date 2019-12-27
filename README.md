# reactLocalStorage
Easy use localstorage in Preact. It also supports SSR (Prerender).

## Installation

```bash
npm install preact-localstorage
```
or
```bash
yarn add preact-localstorage
```

## Examples

```javascript
import {preactLocalStorage} from 'preact-localstorage';

preactLocalStorage.set('var', true);
preactLocalStorage.get('var', true);
preactLocalStorage.setObject('var', {'test': 'test'});
preactLocalStorage.getObject('var');
preactLocalStorage.remove('var');
preactLocalStorage.clear();
```

## API Guide

**Default VALUE is required while getting values (because SSR doesn't have real localStorage)**

- `preactLocalStorage.set(key, value)`
- `preactLocalStorage.get(key, deafultValue, silent=true)`
- `preactLocalStorage.setObject(key, object)`
- `preactLocalStorage.getObject(key, defaultValue, silent=true)`
- `preactLocalStorage.remove(key)`
- `preactLocalStorage.clear()`

**silent**:
- `true`: Will not throw exception instead will return defaultValue
- `false`: Will throw exception

## License
MIT
