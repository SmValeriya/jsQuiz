export const srcDir = 'src';
export const buildDir = 'build';
const env = process.env.NODE_ENV;

const productionMode = 'production';

export const isProdMode = env === productionMode;

export const paths = {
  views: {
    src: `./${srcDir}/pages/*.pug`,
    dist: buildDir
  }
};