import { Post } from '../types';

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <div className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-white transition-all hover:transform hover:scale-105 cursor-pointer">
            <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-gray-300">
                    Post #{post.id}
                </span>
                <span className="px-3 py-1 bg-gray-800 rounded-full text-xs font-semibold text-gray-300">
                    User {post.userId}
                </span>
            </div>
            <h2 className="text-xl font-bold mb-3 text-white capitalize line-clamp-2">
                {post.title}
            </h2>
            <p className="text-gray-400 text-sm line-clamp-4 leading-relaxed">{post.body}</p>
        </div>
    );
}
