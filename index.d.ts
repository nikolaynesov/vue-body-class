import { RouteRecordRaw } from 'vue-router';
import VueBodyClass from './dist';

export = VueBodyClass;

declare class VueBodyClass {
    constructor( routes: RouteRecordRaw[] );
    guard( to: object, next: () => void ): void;
    parseMatched( matchedArray: string[] ): string[];
    findMatchInRoutesByPath( routes: RouteRecordRaw[], matchedItem: string ): boolean;
    getClassForRoute( route: RouteRecordRaw ): string | null;
    updateClassFromRoute( className: string, route: RouteRecordRaw ): string;
}
