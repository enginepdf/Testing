module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "rules": {
        "curly": "error",
        "quotes": ["error", "single"], // "double"
  	    "comma-style": ["error", "last"],
        "object-curly-spacing": [ 0, "always" ],  // 0 === 'off' 1 === 'warn' 2 === 'error'
        "max-len": [2, 
                        {
                        "code" : 100
                        }
                   ],    
        "semi": "error",            
    }
};
