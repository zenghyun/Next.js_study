"use client";
import { useFormStatus } from "react-dom";

/**
 *
 * @param {string} text
 * @returns {JSX.Element}
 * @description
 * 이 컴포넌트는 폼 제출 버튼을 표시하는 컴포넌트입니다.
 * 폼 제출 버튼은 폼 제출 상태에 따라 비활성화됩니다.
 * 폼 제출 상태는 useFormStatus 훅을 사용하여 가져옵니다.
 * useFormStatus 훅은 form tag 안에 있는 컴포넌트에서만 사용할 수 있습니다.
 * 폼 제출 상태는 pending 값을 가지며, pending 값이 true일 때 버튼은 비활성화됩니다.
 * 폼 제출 상태는 pending 값이 false일 때 버튼은 활성화됩니다.
 * 폼 제출 상태는 pending 값이 true일 때 버튼은 비활성화됩니다.
 */
export default function MealsFormSubmit({ text }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Sharing..." : text}
    </button>
  );
}
