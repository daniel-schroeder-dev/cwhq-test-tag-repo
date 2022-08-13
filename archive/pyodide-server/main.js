const pythonProgram = null;

main();

async function main(){
    let pyodide = await loadPyodide();
    pyodide.runPython(pythonProgram);
}


