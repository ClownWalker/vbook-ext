function execute(key, page) {
    const BASE_URL = 'https://www.hentaidexy.net/manga/'
    if (!page) page = '1';
    const options = {
        method: 'GET',
        queries : {
            page : page,
            sort : 'createdAt',
            altTitles : key
        }
    };
    let response = fetch('https://hentaibackend.vercel.app/api/v1/mangas', options)
    if (response.ok){
        let data = response.json();
        let mangas = data.mangas;
        let list = [];
        mangas.forEach( e => list.push({
            name: e.title,
            link: BASE_URL+e._id,
            cover: e.coverImage,
            description: e.type,
            host: "https://hentaidexy.net"
        }));
        return Response.success(list)
    }
    return Response.error('message') // Trả về response thất bại với nội dung lỗi
}