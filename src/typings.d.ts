/* SystemJS module definition */

// Allow .json files imports
declare module '*.json';

declare var module: NodeModule;

interface NodeModule {
	id: string;
}
