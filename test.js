module.exports = {
	extends: [ './index' ].map(require.resolve),
	env: {
		mocha: true
	},
	globals: {
		expect: true,
		sinon: true
	},
	rules: {
		eqeqeq: 2,
		'no-fallthrough': 2,
		'no-unused-expressions': 0
	}
};
