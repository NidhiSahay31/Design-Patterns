// Client code
import { Folder } from './composite';
import {File} from './leaf';

const file1 = new File('file1.txt');
const file2 = new File('file2.txt');
const file3 = new File('file3.txt');

const folder1 = new Folder('Documents');
folder1.add(file1);
folder1.add(file2);

const folder2 = new Folder('Pictures');
folder2.add(file3);

const rootFolder = new Folder('Root');
rootFolder.add(folder1);
rootFolder.add(folder2);

rootFolder.display('');