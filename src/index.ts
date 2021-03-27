/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-dynamic-require */

import express from 'express';
import { readdirSync } from 'fs';

/**
 * The RoutesParse class.
 * @param {string} directory - The routes directory.
 * @param {express.Application} application - Your express application.
 * @returns {void}
 * @function parse - Parses your route directory
 */
export class RoutesParser {
    public directory!: string;

    public application!: express.Application;

    constructor(directory:string) {
      directory = this.directory;
    }

    parse() : void {
      const routes = readdirSync(this.directory);
      routes.filter((r) => r.endsWith('.js') || r.endsWith('.ts')).forEach((r) => {
        this.application.use(`/${r.split('.')[0]}`, require(`${this.directory}/${r}`));
      });
    }
}
