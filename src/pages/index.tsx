import  { useEffect, useState ,Fragment} from 'react';
import ActionCard from '@components/home/ActionCard';
import Pagination from '@mui/material/Pagination';
import { BoxCard, BoxPage, Container, Loading } from 'components/home/Home.style';
import gate from 'gate';
import { Posts } from 'interfaces/posts.interface';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<Posts['data']>([]);
    const [pagination, setPagination] = useState(1);
    const [pages, setPages] = useState(1);

    const getAllPosts = async () => {
        try {
            const res = await gate.getPosts({ page: pages });
            setIsLoading(false);
            setPosts(res.entity.posts.data);
            setPagination(res.entity.posts.per_page);
        } catch (error) {
            console.log('🚀 ~ file: index.tsx ~ line 24 ~ getAllPosts ~ error', error);
        }
    };

    useEffect(() => {
        getAllPosts();
    }, [pages]);

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Container>
                <BoxCard>
                    {isLoading ? (
                        <Loading>...Loading</Loading>
                    ) : (
                        posts?.map((post) => {
                            return (
                                <Fragment key={post.id}>
                                    <ActionCard 
                                    onUpdate={
                                        getAllPosts
                                    }
                                    data={post} />
                                </Fragment>
                            );
                        })
                    )}
                </BoxCard>
                <BoxPage>
                    {pagination > 1 ? (
                        <Pagination
                            count={pagination}
                            onChange={(_e, page: number) => setPages(page)}
                        />
                    ) : null}
                </BoxPage>
            </Container>
        </>
    );
};

export default Home;
