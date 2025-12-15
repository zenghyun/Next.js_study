"use client";
import classes from "./image-picker.module.css";
import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";

export default function ImagePicker({ name, label }) {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef(null);

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    /**
     * FileReader: 브라우저 내장 API
     * 파일을 비동기적으로 읽어서 다양한 형식으로 변환하는 역할
     */
    const fileReader = new FileReader();

    /**
     * onload: 파일 읽기가 완료되었을 때 실행되는 콜백
     * fileReader.result: 읽은 파일의 결과 ( Data URL 형식 )
     * 예: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg..."
     * Data URL: 파일 데이터를 문자열로 변환한 것
     * 이미지 데이터를 문자열로 변환하여 브라우저에서 이미지로 표시할 수 있게 해줌
     *
     * Data URL 방식의 장점:
     * 즉시 미리보기 가능: 서버 업로드 없이 클라이언트에서 바로 이미지 표시
     * <Image> 컴포넌트에 직접 사용 가능: src={pickedImage}
     * 사용자 경험 향상: 업로드 전에 선택한 이미지 확인 가능
     */
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    /**
     * 파일을 Data URL로 변환하여 읽기 시작
     * 이 작업은 비동기로 진행
     * 완료되면 위에서 설정한 onload 콜백이 실행됨
     */
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          ) : (
            <p>No Image Picked Yet.</p>
          )}
        </div>
        <input
          ref={imageInputRef}
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png image/jpeg"
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
