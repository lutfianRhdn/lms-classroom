INSERT INTO `classes` (`id`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES (1, 'IF-3', '2024-01-29 13:23:05.871', '2024-01-29 13:23:05.871', NULL);
INSERT INTO `course` (`id`, `name`, `createdAt`, `updatedAt`, `deletedAt`, `azure_container_name`, `azure_datasource_name`, `azure_index_name`, `azure_indexer_name`) VALUES (1, 'Coursera', '2024-01-30 03:24:25.218', '2024-01-30 03:24:25.218', NULL, '1706585061599-coursera-container', '1706585061599-coursera-datasource', '1706585061599-coursera-index', '1706585061599-coursera-indexer');
INSERT INTO `user` (`id`, `username`, `name`, `password`, `createdAt`, `updatedAt`, `deletedAt`, `role`, `class_id`) VALUES
(2, 'apriana', 'Apriana', '$2a$10$IWwEL0djsVEv5aPQkLdHKOGQtWNGBd.vbi/VK01FCg4vVrgJ2JpHq', '2024-01-29 13:24:33.332', '2024-01-29 13:24:33.332', NULL, 'STUDENT', 1),
(3, 'dosen', 'Nia', '$2a$10$UuoEo30MVxFVyTp2/.SnZOkrCHljmuC0olroec6mLoKpoCcvYUtWW', '2024-01-29 13:25:58.397', '2024-01-29 13:25:58.397', NULL, 'INSTRUCTOR', NULL),
(4, 'apiw', 'Apriana', '$2a$10$gGR90cKEjGe80/WA1W55FeqrqiS1XlXBsF4fcSxzylkZfBx5RajzS', '2024-01-29 13:34:56.120', '2024-01-29 13:34:56.120', NULL, 'STUDENT', 1),
(5, 'apriu', 'Apriana', '$2a$10$VM08e3zw9Tbeoo9K2k4H3.Ar467NXmGuNEHxS2Ma5fQRswD1wykYu', '2024-01-29 13:35:11.686', '2024-01-29 13:35:11.686', NULL, 'STUDENT', 1);
INSERT INTO `user_course` (`id`, `user_id`, `course_id`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 2, 1, '2024-01-30 03:24:25.283', '2024-01-30 03:24:25.283', NULL),
(2, 4, 1, '2024-01-30 03:24:25.283', '2024-01-30 03:24:25.283', NULL),
(3, 5, 1, '2024-01-30 03:24:25.283', '2024-01-30 03:24:25.283', NULL),
(4, 3, 1, '2024-01-30 03:24:25.287', '2024-01-30 03:24:25.287', NULL);