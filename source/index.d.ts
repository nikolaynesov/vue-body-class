import { RouteRecordRaw } from 'vue-router';
import { VueBodyClass } from 'vue-body-class';

declare type VueBodyClass = InstanceType<typeof VueBodyClass>;
declare function VueBodyClass( routes: RouteRecordRaw[] ) : VueBodyClass;
