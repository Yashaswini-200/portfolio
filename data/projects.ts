import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    slug: 'uart-command-shell',
    title: 'UART Command Shell',
    status: 'Complete',
    summary: 'Interrupt-driven serial command interface for embedded debugging and control.',
    problem: 'Embedded systems require a lightweight method for runtime interaction and debugging without external hardware.',
    solution: 'Built a UART command shell using Embedded C with command parsing and a fixed-size buffer.',
    architecture: {
      summary: 'A serial command parser built around interrupt-driven UART input and response routing.',
      nodes: [
        { id: 'uart-rx', label: 'UART RX Interrupt' },
        { id: 'buffer', label: 'Fixed-Size Buffer' },
        { id: 'parser', label: 'Command Parser' },
        { id: 'dispatcher', label: 'Command Dispatcher' },
        { id: 'uart-tx', label: 'UART TX Response' }
      ],
      dataFlow:
        'Byte received → ISR writes to buffer → Parser extracts command → Dispatcher routes → TX sends response'
    },
    keyLearnings: ['Designing modular firmware', 'Asynchronous communication workflows'],
    technologies: ['Embedded C', 'UART', 'Interrupts'],
    githubUrl: 'https://github.com/yashaswini/uart-command-shell',
    featured: true
  },
  {
    id: 2,
    slug: 'event-driven-uart',
    title: 'Event-Driven UART System',
    status: 'Complete',
    summary: 'UART communication system designed using event-driven principles.',
    problem: 'Polling-based communication wastes CPU cycles and reduces system responsiveness.',
    solution: 'Implemented interrupt-driven UART handling using a producer-consumer approach.',
    architecture: {
      summary: 'A producer-consumer UART design that separates ISR capture from main loop processing.',
      nodes: [
        { id: 'uart-isr', label: 'UART RX ISR' },
        { id: 'ring-buffer', label: 'Ring Buffer (Producer)' },
        { id: 'main-loop', label: 'Main Loop (Consumer)' },
        { id: 'event-handler', label: 'Event Handler' },
        { id: 'uart-tx', label: 'UART TX' }
      ],
      dataFlow:
        'Interrupt fires → ISR enqueues byte → Main loop dequeues → Event handler processes → Response sent'
    },
    keyLearnings: ['Designing ISR-safe communication mechanisms', 'Producer-consumer patterns in embedded C'],
    technologies: ['Embedded C', 'UART', 'Interrupts', 'Ring Buffers'],
    githubUrl: 'https://github.com/yashaswini/event-driven-uart',
    featured: true
  },
  {
    id: 3,
    slug: 'cooperative-scheduler',
    title: 'Cooperative Task Scheduler',
    status: 'Complete',
    summary: 'Lightweight scheduler for periodic task execution without an RTOS.',
    problem: 'Managing multiple periodic tasks in a single main loop leads to poor scalability and coupling.',
    solution: 'Implemented a cooperative scheduler using timer interrupts and function pointers.',
    architecture: {
      summary: 'A task scheduler that relies on timer-driven ticks and an array of task control blocks.',
      nodes: [
        { id: 'hardware-timer', label: 'Hardware Timer' },
        { id: 'tick-counter', label: 'Tick Counter' },
        { id: 'task-table', label: 'Task Table (TCB Array)' },
        { id: 'scheduler-loop', label: 'Scheduler Loop' },
        { id: 'task-functions', label: 'Task Functions' }
      ],
      dataFlow:
        'Timer interrupt → increments tick → Scheduler checks elapsed per task → Executes due tasks → Returns'
    },
    keyLearnings: ['Building non-blocking systems', 'Deterministic execution flow without RTOS overhead'],
    technologies: ['Embedded C', 'Timers', 'Function Pointers', 'Cooperative Scheduling'],
    githubUrl: 'https://github.com/yashaswini/cooperative-scheduler',
    featured: true
  },
  {
    id: 4,
    slug: 'predictive-maintenance',
    title: 'Predictive Maintenance System',
    status: 'Complete',
    summary: 'Machine health monitoring using vibration and temperature sensor data.',
    problem: 'Unexpected equipment failures can be reduced through early detection and monitoring.',
    solution: 'Developed a prototype using RMS vibration values, temperature monitoring, and a fault-detection state machine.',
    architecture: {
      summary: 'A monitoring pipeline from sensors to fault classification and status output.',
      nodes: [
        { id: 'vibration-sensor', label: 'Vibration Sensor' },
        { id: 'temperature-sensor', label: 'Temperature Sensor' },
        { id: 'rms-calculator', label: 'RMS Calculator' },
        { id: 'state-machine', label: 'State Machine (Fault Classifier)' },
        { id: 'uart-output', label: 'UART Output' }
      ],
      dataFlow:
        'Sensors sampled → RMS computed → State machine evaluates thresholds → Fault state set → Status output'
    },
    keyLearnings: ['Combining sensor data with state machine fault classification', 'Prototyping on NodeMCU with Wokwi simulation'],
    technologies: ['Embedded C', 'NodeMCU', 'PlatformIO', 'Wokwi', 'State Machines'],
    githubUrl: 'https://github.com/yashaswini/predictive-maintenance',
    featured: true
  }
];
