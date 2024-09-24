const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // 사용자 추가
    const newUser = await prisma.users.create({
        data: {
            user_id: 'zoe',
            user_psw: '1234',
            user_name: '김수민'
        },
    });
    console.log('새로운 사용자 추가:', newUser);

    // 모든 사용자 조회
    const users = await prisma.users.findMany();
    console.log('모든 사용자:', users);
}

// 실행 및 오류 처리
main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });