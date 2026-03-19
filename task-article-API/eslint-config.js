module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'prisma', 'unicorn', 'filenames'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@nestjs/eslint-plugin/recommended', // ✅ Use NestJS plugin for best results
    'plugin:prettier/recommended',
    'plugin:prisma/recommended',
    'plugin:unicorn/recommended',
    'plugin:filenames/recommended',
  ],
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  rules: {
    // ✅ Naming conventions
    'filenames/match-regex': [2, '^[a-z0-9-]+$', true],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
        },
      },
    ],

    // ✅ Prettier formatting
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        arrowParens: 'always',
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
      },
    ],

    // ✅ TypeScript rules
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-types': 'off',

    // ✅ General JS rules
    'no-console': 'warn',
    'no-debugger': 'warn',

    // ✅ Prisma rules
    'prisma/valid-datamodel': 'warn',
    'prisma/no-unsafe-migration': 'warn',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
};
