export const qaEntries = [
      {
        "question": "What is useState and how does it work in React?",
        "answer": "useState is a React hook that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update it. When the state updates, React re-renders the component with the new state value. For example, const [count, setCount] = useState(0) initializes a state variable count with a value of 0, and setCount updates it.",
        "date": "2025-04-21",
        "user": "rajbhk25032@gmail.com"
      },
      {
        "question": "What is the purpose of useEffect in React?",
        "answer": "useEffect is a React hook used to handle side effects in functional components, such as fetching data, updating the DOM, or setting up subscriptions. It runs after every render by default but can be controlled with a dependency array. For example, useEffect(() => { fetchData(); }, [dependency]) runs fetchData when dependency changes.",
        "date": "2025-04-21",
        "user": "rajbhk25032@gmail.com"
      },
      {
        "question": "What is a custom hook in React and when should you use one?",
        "answer": "A custom hook is a reusable function in React that encapsulates logic using built-in hooks like useState or useEffect. It starts with 'use' (e.g., useCustomHook). Use custom hooks to avoid duplicating logic across components, such as form handling or API calls, making your code more modular and maintainable.",
        "date": "2025-04-21",
        "user": "rajbhk25032@gmail.com"
      },
      {
        "question": "Difference between controlled and uncontrolled components. Which one is better?",
        "answer": "Controlled components have their form data managed by React state (e.g., an input’s value is tied to a state variable via value and onChange). Uncontrolled components let the DOM handle the form data (accessed via refs). Controlled components offer better control and validation, while uncontrolled components are simpler for basic forms. Controlled components are generally preferred for complex forms due to React’s state management.",
        "date": "2025-04-21",
        "user": "rajbhk25032@gmail.com"
      },
      {
        "question": "Tell us something about useFormStatus() in React.",
        "answer": "useFormStatus() is a React hook (introduced in React 19) that provides the status of a form during submission. It returns an object with properties like pending (true if the form is submitting), data (the form data being submitted), method (e.g., 'POST'), and action (the form’s action). It’s useful for showing loading states or handling form submissions without additional state management.",
        "date": "2025-04-21",
        "user": "rajbhk25032@gmail.com"
      }
    ]
