import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Container, Loading } from 'components/home/Home.style';
import gate from 'gate';
import { Entity } from 'interfaces/postDetail';
import { useRouter } from 'next/router';
import * as React from 'react';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function RecipeReviewCard() {
    const router = useRouter();
    const { id } = router.query;

    const [expanded, setExpanded] = React.useState(false);
    const [post, setPost] = React.useState<Entity['post']>();

    const postDetail = async () => {
        const res = await gate.getPostDetail(id);
        setPost(res.entity.post);
    };

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    React.useEffect(() => {
        postDetail();
    }, []);

    return (
        <Container>
            {post ? (
                <Card sx={{ maxWidth: 400, minWidth: 400, minHeight: 400 }}>
                    <CardHeader title={post.title} />
                    <CardMedia
                        component="img"
                        height="150"
                        image={post.thumbnail_url}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {post.introduction}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            {post.favorite_count}
                        </IconButton>
                        <IconButton aria-label="add to favorites">
                            <StarIcon />
                            {post.rate}
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </CardContent>
                    </Collapse>
                </Card>
            ) : (
                <Loading>...Loading</Loading>
            )}
        </Container>
    );
}
