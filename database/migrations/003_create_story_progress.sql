CREATE TABLE story_progress (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

    user_id BIGINT NOT NULL,
    story_id BIGINT NOT NULL,

    last_scene INTEGER DEFAULT 1,
    is_completed BOOLEAN DEFAULT FALSE,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_story
        FOREIGN KEY (story_id)
        REFERENCES legal_stories(id)
        ON DELETE CASCADE,

    CONSTRAINT unique_user_story
        UNIQUE (user_id, story_id)
);