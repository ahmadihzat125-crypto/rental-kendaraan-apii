-- CreateTable
CREATE TABLE `Pelanggan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `no_hp` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kendaraan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `merk` VARCHAR(191) NOT NULL,
    `plat_nomor` VARCHAR(191) NOT NULL,
    `tahun` INTEGER NOT NULL,

    UNIQUE INDEX `Kendaraan_plat_nomor_key`(`plat_nomor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Penyewaan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pelangganId` INTEGER NOT NULL,
    `kendaraanId` INTEGER NOT NULL,
    `tanggal_sewa` DATETIME(3) NOT NULL,
    `total_biaya` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Penyewaan` ADD CONSTRAINT `Penyewaan_pelangganId_fkey` FOREIGN KEY (`pelangganId`) REFERENCES `Pelanggan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Penyewaan` ADD CONSTRAINT `Penyewaan_kendaraanId_fkey` FOREIGN KEY (`kendaraanId`) REFERENCES `Kendaraan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
