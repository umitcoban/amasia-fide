
export const getErrorMessageWithStatus = (status: number): string => {
    let message = "";
    console.log(status);
    switch (status) {
        case 401:
            message = "Yetkilendirme hatası lütfen giriş yapın";
            break;
        case 403:
            message = "Yetkilendirme hatası lütfen giriş yapın";
            break;
        case 404:
            message = "Bir hata oluştu kullanıcı bulunamadı. Lütfen daha sonra tekrar deneyin!";
            break;
        default:
            message = "Beklenmedik bir hata oluştu!"
            break;
    }

    return message;
}