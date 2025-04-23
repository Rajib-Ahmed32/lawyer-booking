import useStateImg from '../assets/useState.jpg';
import useEffectImg from '../assets/useEffect-hook.png';
import customHookImg from '../assets/customHook.jpg';
import controlledVsUncontrolledImg from '../assets/control-uncontrol.png';
import useFormStatusImg from '../assets/useForm.png';

export const qaEntries = [
  {
    question: "What is useState and how does it work in React?",
    answer:
      "useState is like a memory box for your component. It lets you store a value (like a number or text), and when that value changes, React automatically updates the screen. For example, you can use it to count how many times a button is clicked. It gives you two things: the current value, and a way to update it. So when you click a button, you call the updater, and React shows the new value instantly.",
    date: "2025-04-23",
    user: "rajbkh25032@gmail.com",
    image: useStateImg
  },
  {
    question: "What is the purpose of useEffect in React?",
    answer:
      "useEffect is like a helper that runs after your component is shown on the screen. It’s perfect for things like getting data from an API, updating the page title, or setting a timer. You tell it what to do and when to do it. If you want it to run only once, you give it an empty list. If you want it to run every time something changes, you tell it what to watch. It helps React do 'side jobs' outside the normal rendering process.",
    date: "2025-04-23",
    user: "rajbkh25032@gmail.com",
    image: useEffectImg
  },
  {
    question: "What is a custom hook in React and when should you use one?",
    answer:
      "A custom hook is like a little toolbox you build yourself using React’s built-in hooks like useState or useEffect. If you find yourself writing the same logic in many components (like handling form input or fetching data), you can move that logic into a custom hook. This keeps your components clean and lets you reuse the same logic easily. All custom hooks start with the word 'use', like useForm or useTheme.",
    date: "2025-04-23",
    user: "rajbkh25032@gmail.com",
    image: customHookImg
  },
  {
    question: "Difference between controlled and uncontrolled components. Which one is better?",
    answer:
      "In a controlled component, React manages the form input’s value using state. You use value and onChange to keep everything in sync. In an uncontrolled component, the browser keeps the value, and you use a ref to read it when needed. Controlled components are great when you need to do things like validate input or show real-time changes. They give you more control. Uncontrolled components are simpler and might be better for quick or small forms.",
    date: "2025-04-23",
    user: "rajbkh25032@gmail.com",
    image: controlledVsUncontrolledImg
  },
  {
    question: "Tell us something about useFormStatus() in React.",
    answer:
      "useFormStatus is a React hook that tells you what’s happening when someone submits a form. It lets you know if the form is still sending (called 'pending'), what data is being sent, and which method is being used (like POST). It’s useful when you want to show a loading message, disable the submit button, or give the user feedback while the form is working. It's like having a behind-the-scenes status checker.",
    date: "2025-04-23",
    user: "rajbhk25032@gmail.com",
    image: useFormStatusImg
  }
];


