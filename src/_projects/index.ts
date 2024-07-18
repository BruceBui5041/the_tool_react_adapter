import client from './client';
import admin from './admin';
import test_app from './test_app';
import warehouse_admin from './warehouse_admin';
import { IProjectInfo } from '../page-builder/common-interface/builder-common-interface';

const projects: Record<string, IProjectInfo> = {
  client,
  admin,
  test_app,
  warehouse_admin,
};

export default projects;
