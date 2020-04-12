import colors from 'colors';
import { env } from '../env';

function getDateLog(type: 'INFO' | 'WARN' | 'ERROR' | 'DEBUG' = 'INFO'): string {

  const msgDev = {
    'INFO' : colors.bold.blue(`[${new Date().toISOString()}]`) + colors.bold.green(`[${type}]`) + ' ',
    'WARN' : colors.bold.blue(`[${new Date().toISOString()}]`) + colors.bold.yellow(`[${type}]`) + ' ',
    'ERROR': colors.bold.blue(`[${new Date().toISOString()}]`) + colors.bold.red(`[${type}]`) + ' ',
    'DEBUG': colors.bold.blue(`[${new Date().toISOString()}]`) + colors.bold.yellow(`[${type}]`) + ' ',
  };

  const msgProd = {
    'INFO' : `[${new Date().toISOString()}][${type}] `,
    'WARN' : `[${new Date().toISOString()}][${type}] `,
    'ERROR': `[${new Date().toISOString()}][${type}] `,
    'DEBUG': `[${new Date().toISOString()}][${type}] `,
  };

  return env.production ? msgProd[type] : msgDev[type];
}

/**
 * Prints to `stdout` with newline.
 */
export function log(message?: any, ...optionalParams: any[]): void {

  if (typeof message === 'string') {
    console.log(getDateLog('INFO') + message);
  } else {
    console.log(getDateLog('INFO'));
    console.log(message);
  }

  if (optionalParams.length > 0) {
    console.log(optionalParams);
  }

}

/**
 * Prints to `stderr` with newline.
 */
export function error(message?: any, ...optionalParams: any[]): void {

  if (typeof message === 'string') {
    console.error(getDateLog('ERROR') + message);
  } else {
    console.error(getDateLog('ERROR'));
    console.error(message);
  }

  if (optionalParams.length > 0) {
    console.error(optionalParams);
  }
}

/**
 * The {@link console.warn()} function is an alias for {@link console.error()}.
 */
export function warn(message?: any, ...optionalParams: any[]): void {

  if (typeof message === 'string') {
    console.warn(getDateLog('WARN') + message);
  } else {
    console.warn(getDateLog('WARN'));
    console.warn(message);
  }

  if (optionalParams.length > 0) {
    console.warn(optionalParams);
  }
}