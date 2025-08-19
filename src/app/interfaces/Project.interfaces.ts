import { Stack } from "./Stack.interfaces";
import { Tech } from "./Tech.interfaces";

export interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  techs: Tech[];
  stack: Stack[];
  demoUrl?: string; // Optional field for demo URL
}