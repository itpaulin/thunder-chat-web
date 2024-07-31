export default {
  '*.{js,jsx,ts,tsx}': [
    'eslint --max-warnings=0 --no-ignore',
    () => 'tsc --noEmit',
  ],
  '*.{js,jsx,ts,tsx,json,css,js}': ['prettier --write'],
}
