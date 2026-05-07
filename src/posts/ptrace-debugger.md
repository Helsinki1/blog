## building a debugger with ptrace

`ptrace` is a Linux system call that allows one process to observe and control the execution of another. It's the foundation of debuggers like GDB.

## basic usage

```c
#include <sys/ptrace.h>
#include <sys/wait.h>
#include <unistd.h>

int main() {
    pid_t child = fork();
    if (child == 0) {
        ptrace(PTRACE_TRACEME, 0, NULL, NULL);
        execl("/bin/ls", "ls", NULL);
    } else {
        wait(NULL);
        // child is now stopped, ready for inspection
        ptrace(PTRACE_CONT, child, NULL, NULL);
    }
    return 0;
}
```

## setting breakpoints

Breakpoints work by replacing an instruction with `INT 3` (opcode `0xCC`). When the CPU hits it, the process receives `SIGTRAP` and the debugger regains control.

## reading registers

```c
struct user_regs_struct regs;
ptrace(PTRACE_GETREGS, child, NULL, &regs);
printf("RIP: 0x%llx\n", regs.rip);
```

*More to come...*
