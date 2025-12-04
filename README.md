# Figma-to-code Challenge

A responsive web application built as part of a Figma-to-Code challenge. This project features a complex, multi-step form interface designed for collecting student details, document checklists, and visa application information with robust validation.

## 🎨 Figma Design
[[Figma](https://www.figma.com/design/cBbtd8t1Z3rhzwfxCm2G0O/Zuzamen?node-id=1604-2&t=IQSqigpGgkj6DavO-1)]

## ✨ Key Features Implemented

* **Responsive UI**: Fully adaptive layout that works seamlessly across desktop and mobile devices.
* **Multi-Step Form**: A guided form experience splitting complex data entry into logical steps (Basic Info, Documents, Application Checklist, Pre-Visa, Visa).
* **Schema Validation**: Implemented using **Zod** to ensure data integrity and provide real-time error feedback.
* **Dynamic Stepper**: visual progress indicator that updates based on the user's current stage in the form.
* **Modern Styling**: Clean and maintainable styling using **Tailwind CSS**.


## 🔮 Features Need to be implemented or can be implemented

1.  **Authentication**: Implement secure user login and registration flows.
2.  **File Upload Logic**: Backend integration to handle actual file uploads for documents and checklists.
3.  **Final Response Page**: Enhance the submission success page with summary details and next steps.
4.  **Animations**: Add smooth transitions between form steps and page loads using libraries like Framer Motion or Tailwind animate.

## 🛠️ Tech Stack

* **Framework**: [React](https://react.dev/) + [Vite](zh-Hans)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Form Handling**: [React Hook Form](https://react-hook-form.com/)
* **Validation**: [Zod](https://zwd.dev/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Routing**: [React Router DOM](https://reactrouter.com/)

## 🎨 Live Demo
[[Demo](https://manu-inversa-project.vercel.app/)]

## 🚀 Result(FormData)
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/56fa05ee-1321-431a-a88c-ad8cd32d6e96" width="300" alt="Basic Information" /><br />
      <b>Basic Information</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/145e995c-1394-4556-9901-5fe0f946fe2f" width="300" alt="Student Document" /><br />
      <b>Student Document</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/b0153196-df1b-4794-a8e1-48c1b3c99cba" width="300" alt="Application Checklist" /><br />
      <b>Application Checklist</b>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/994b44ea-c8dc-4d1d-9a14-268b7148081d" width="300" alt="Pre-Visa Checklist" /><br />
      <b>Pre-Visa Checklist</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/d1f21f12-ec59-4f78-aee4-075d6192b7df" width="300" alt="Visa Checklist" /><br />
      <b>Visa Checklist</b>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/d35b94be-a33d-47e6-9f3b-885612abac16" width="300" alt="Final Submission" /><br />
      <b>Final Submission</b>
    </td>
  </tr>
</table>
