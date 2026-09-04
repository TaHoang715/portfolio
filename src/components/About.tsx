import React, { useRef } from 'react';

export const About: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <section className="about-section" id="about">
      <div
        ref={cardRef}
        className="glass-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h2>
          About Me - <span className="accent-text">Behind The Code!</span>
        </h2>
        <p>
          Mình là <strong>Tạ Minh Hoàng</strong> (nickname <strong>TaHoang715</strong>), vừa tốt nghiệp ngành
          Kỹ thuật Phần mềm tại Đại học FPT. Với mình, lập trình là hành trình biến các ý tưởng trong đầu thành
          những sản phẩm thực tế chạy được và giải quyết được vấn đề cụ thể.
          <br />
          <br />
          Thế mạnh của mình tập trung vào phát triển web full-stack, kiến trúc backend, cùng niềm say mê khám phá
          phát triển game indie và ứng dụng các giải pháp tự động hóa mới. Mình luôn ưu tiên viết code gọn gàng,
          chủ động học hỏi các công nghệ mới và tìm tòi giải pháp phù hợp nhất cho từng bài toán.
        </p>
      </div>
    </section>
  );
};
