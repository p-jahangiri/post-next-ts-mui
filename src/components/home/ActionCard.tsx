import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { CardActionArea, IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import gate from 'gate';
import { SpecialsEntityOrMostVisitedEntityOrMostRatedEntityOrDataEntity } from 'interfaces/posts.interface';
import Link from 'next/link';
import * as React from 'react';

interface ActionCardProps {
    data: SpecialsEntityOrMostVisitedEntityOrMostRatedEntityOrDataEntity;
    onUpdate:VoidFunction
}

const ActionCard: React.FC<ActionCardProps> = ({ data,onUpdate }) => {
    const [isLike, setIsLike] = React.useState(false);

    const sendLike = async (id: number) => {
        try {
            if (isLike) {
                setIsLike(false);
                await gate.postDislike(id);
            } else {
                setIsLike(true);
                await gate.postLike(id);
            }
            onUpdate()
        } catch (error) {
        console.log("🚀 ~ file: ActionCard.tsx ~ line 34 ~ sendLike ~ error", error)
        }
    };

    return (
        <Card sx={{ maxWidth: 345, minWidth: 320, margin: 5 }}>
            <CardActionArea>
                <CardMedia
                    className="img"
                    component="img"
                    height="140"
                    image={data.thumbnail_url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="text">
                        {data.introduction}
                    </Typography>
                    <IconButton
                        aria-label="like"
                        sx={{ marginLeft: 5 }}
                        onClick={() => sendLike(data.id)}
                    >
                        {isLike ? <ThumbUpIcon /> : <ThumbDownAltIcon />}
                    </IconButton>
                    <Link href={`/user/${data.id}`}>
                        <Button size="small" color="secondary" variant="contained">
                            Learn More
                        </Button>
                    </Link>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ActionCard;
