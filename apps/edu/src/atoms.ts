import { atom } from "jotai";
import type { CourseType, UserType } from "./types";

export const userAtom = atom<UserType | null>(null);

export const courseAtom = atom<CourseType[]>([]);
