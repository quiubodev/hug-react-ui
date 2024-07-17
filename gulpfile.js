import gulp from "gulp";
import { deleteSync } from "del";
import shell from "gulp-shell";

// Tarea para eliminar la carpeta dist
gulp.task("clean", async () => {
  return deleteSync("dist");
});

// Tarea que hace commit de la carpeta eliminada
gulp.task("clean-git-add-deleted", shell.task("git add ."));

// Tarea que hace commit de la carpeta eliminada
gulp.task("clean-git-add", shell.task('git commit -m "delete dist"'));

// Tarea para ejecutar "npm run prepare && npm run build"
gulp.task("build", shell.task("npm run prepare && npm run build"));

// Tarea para ejecutar "git add -f dist"
gulp.task("git-add", shell.task("git add -f dist"));

// Tarea para crear el commit
gulp.task("git-commit", shell.task('git commit -m "add build"'));

// Tarea por defecto que ejecuta las tareas en serie
gulp.task(
  "default",
  gulp.series(
    "clean",
    "clean-git-add-deleted",
    "clean-git-add",
    "build",
    "git-add",
    "git-commit",
  ),
);
