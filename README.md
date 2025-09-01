# WShop 🛍️
간단한 미니 쇼핑몰 프로젝트 (MVP)

## 🚀 기술 스택
- **Backend**: Node.js, Express, Prisma, PostgreSQL
- **Frontend**: Next.js(App Router), Tailwind CSS, React Query
- **DB**: PostgreSQL
- **배포 예정**: FE → Vercel / BE → Render(Railway)

---

## 📂 폴더 구조
WShop/
┣ backend/ # Express + Prisma 서버
┃ ┣ src/
┃ ┃ ┣ routes/ # 라우트 정의
┃ ┃ ┣ controllers/# 비즈니스 로직
┃ ┃ ┣ middlewares/# 인증/에러 핸들러
┃ ┃ ┗ server.js # 서버 시작점
┃ ┣ prisma/ # Prisma 스키마/마이그레이션
┃ ┣ .env # 로컬 개발용 환경변수
┃ ┗ package.json
┣ frontend/ # Next.js + Tailwind
┃ ┣ app/
┃ ┣ components/
┃ ┣ lib/
┃ ┗ package.json

yaml
복사
편집

---

## ⚙️ 환경 변수

### backend/.env
```env
DATABASE_URL="postgresql://wshop:wshoppw@localhost:5432/wshopdb?schema=public"
JWT_SECRET="change-me"
PORT=4000
CORS_ORIGIN="http://localhost:3000"
